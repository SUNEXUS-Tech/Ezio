/**
 * Web Audio ambient sacred harp & orchestral chimes synthesizer
 * Provides a soothing, uplifting hymn soundscape for the thanksgiving celebration.
 */

class SacredHymnAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private step = 0;

  // Hymnal progression chords: G - D/F# - Em - C - G - D - C - G (Amazing Grace harmonic feel)
  private chords = [
    [196.0, 246.94, 293.66, 392.0], // G
    [185.0, 220.0, 293.66, 369.99], // D/F#
    [164.81, 196.0, 246.94, 329.63], // Em
    [130.81, 196.0, 261.63, 329.63], // C
    [196.0, 293.66, 392.0, 493.88], // G high
    [146.83, 220.0, 293.66, 440.0], // D
    [130.81, 164.81, 196.0, 261.63], // C
    [196.0, 246.94, 293.66, 392.0], // G
  ];

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.22, this.ctx.currentTime);

      this.analyserNode = this.ctx.createAnalyser();
      this.analyserNode.fftSize = 64;

      this.masterGain.connect(this.analyserNode);
      this.analyserNode.connect(this.ctx.destination);
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public async play(): Promise<void> {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlaying = true;
    this.scheduleNextArpeggio();
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number): void {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, vol));
      this.masterGain.gain.setTargetAtTime(clamped * 0.3, this.ctx.currentTime, 0.05);
    }
  }

  public getFrequencyData(array: Uint8Array<ArrayBuffer>): void {
    if (this.analyserNode) {
      this.analyserNode.getByteFrequencyData(array);
    }
  }

  private playTone(freq: number, duration: number, delaySec = 0, isBell = false): void {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Harp / Chime sound design
    osc.type = isBell ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delaySec);

    // Filter to warm up tone
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBell ? 3500 : 1800, this.ctx.currentTime + delaySec);

    const startTime = this.ctx.currentTime + delaySec;
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(isBell ? 0.12 : 0.2, startTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  private scheduleNextArpeggio(): void {
    if (!this.isPlaying || !this.ctx) return;

    const currentChord = this.chords[this.step % this.chords.length];
    
    // Play harp arpeggio
    currentChord.forEach((note, index) => {
      this.playTone(note, 2.8, index * 0.32, false);
    });

    // Gentle celestial bell accent on certain beats
    if (this.step % 2 === 0) {
      const rootNote = currentChord[currentChord.length - 1] * 2;
      this.playTone(rootNote, 3.2, 0.64, true);
    }

    this.step++;
    const nextInterval = 2800; // ms between chord cycles
    this.timerId = window.setTimeout(() => {
      this.scheduleNextArpeggio();
    }, nextInterval);
  }
}

export const hymnAudio = new SacredHymnAudio();
