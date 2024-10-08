export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
  credits: number & & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return subject1.credits + subject2.credits;
