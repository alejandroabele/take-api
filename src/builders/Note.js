class Note {
  constructor({ data, member }) {
    data && (this.data = data);
    member && (this.member = member);
  }
}
module.exports = Note;
