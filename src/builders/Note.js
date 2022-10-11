class Note {
  constructor() {}
  withData({ data, member }) {
    data && (this.data = data);
    member && (this.member = member);
    return this;
  }
}
module.exports = Note;
