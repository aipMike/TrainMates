export class Tempi {
  id: number;
  user: string;
  sport: string;
  type: string;
  startTime: Date;
  endTime: Date;
  time: Date;

  constructor(id: number, alias: string, sport: string, type: string, startTime: Date, endTime: Date) {
    this.id = id;
    this.user = alias;
    this.sport = sport;
    this.type = type;
    this.startTime = new Date(startTime);
    this.endTime = new Date(endTime);
    this.time = new Date(this.endTime.getTime() - this.startTime.getTime());
  }
}
