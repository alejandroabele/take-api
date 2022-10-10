class Member {
  constructor({ name, phoneNumber, email, client }) {
    name && (this.name = name);
    phoneNumber && (this.phoneNumber = phoneNumber);
    email && (this.email = email);
    client && (this.client = client);
  }
}
module.exports = Member;
