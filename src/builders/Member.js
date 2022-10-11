class Member {
  constructor() {}
  withData({ name, phoneNumber, email, client }) {
    name && (this.name = name);
    phoneNumber && (this.phoneNumber = phoneNumber);
    email && (this.email = email);
    client && (this.client = client);
    return this;
  }
}
module.exports = Member;
