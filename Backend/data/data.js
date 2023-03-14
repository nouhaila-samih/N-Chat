const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: 'Nouhaila Samih',
        email: 'nouhaila.samih@example.com',
      },
      {
        name: 'Nupii',
        email: 'Nupii@example.com',
      },
    ],
    _id: '617a077e18c25468bc7c4dd4',
    chatName: 'Nupii',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Rim User',
        email: 'Rim.user@example.com',
      },
      {
        name: 'Nouhaa',
        email: 'Nouhaa@example.com',
      },
    ],
    _id: '617a077e18c25468b27c4dd4',
    chatName: 'Nouha',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Alexa Only',
        email: 'Alexa@example.com',
      },
      {
        name: 'Nouhaila Samih',
        email: 'Nouhaila.samih@example.com',
      },
    ],
    _id: '617a077e18c2d468bc7c4dd4',
    chatName: 'Alexa',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'Rim User',
        email: 'Rim.user@example.com',
      },
      {
        name: 'Nouhaa',
        email: 'Nouhaa@example.com',
      },
      {
        name: 'Nupii',
        email: 'Nupii@example.com',
      },
    ],
    _id: '617a518c4081150716472c78',
    chatName: 'Friends',
    groupAdmin: {
      name: 'Nupii',
      email: 'Nupii@example.com',
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Rim User',
        email: 'Rim.user@example.com',
      },
      {
        name: 'Nupii',
        email: 'Nupii@example.com',
      },
    ],
    _id: '617a077e18c25468bc7cfdd4',
    chatName: 'Jane Doe',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'John Doe',
        email: 'jon@example.com',
      },
      {
        name: 'Piyush',
        email: 'piyush@example.com',
      },
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
    ],
    _id: '617a518c4081150016472c78',
    chatName: 'Chill Zone',
    groupAdmin: {
      name: 'Guest User',
      email: 'guest@example.com',
    },
  },
];
module.exports = { chats };
