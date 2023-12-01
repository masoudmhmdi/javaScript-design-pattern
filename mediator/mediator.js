// create member constructor

function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    console.log(`you(${this.name}) have a message from "${fromMember.name}" :${message}`);
  },
};
// create Chatroom constructor

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },
};

const ali = new Member('ali');
const mmd = new Member('mmd');

const chatroom = new Chatroom();
chatroom.addMember(ali);
chatroom.addMember(mmd);

ali.send('hello', mmd);
