export class Feed {
  constructor(
    public title: string,
    public content: string,
    public createdAt: Date
  ) {
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }
}
