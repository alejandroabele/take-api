class Client {
  withData({ name, address, city, state, zip, headCount, status }) {
    name && (this.name = name);
    address && (this.address = address);
    city && (this.city = city);
    state && (this.state = state);
    zip && (this.zip = zip);
    headCount && (this.headCount = headCount);
    status && (this.status = status);
    return this;
  }
}
module.exports = Client;
