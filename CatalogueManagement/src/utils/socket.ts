import {io} from 'socket.io-client';

// class webSocket {

//     static socket:any

//   public static async initializeSocket(socketurl: string) {
//     let socket;
//     try {
//       socket = io('http://localhost:4000', {
//         transports: ['websocket'],
//       });

//       socket.on('connect', () => {
//         console.log('Connected');
//       });

//       socket.on('disconnect', () => {
//         console.log('Disconnected');
//       });

//       socket.on('error', () => {
//         console.log('Error while initialization');
//       });

//     } catch (error) {
//       console.log('Error in Socket initialization');

//       console.log(error);
//     }
//   }

//   emit(event:any,data={}){
//     webSocket.socket.emit(event,data);
//   }

//   on(event:any,data={}){
//     webSocket.socket.on(event,data);
//   }

//   removeListner(listner:any){
//     webSocket.socket.emit(listner);
//   }
// }

// export default webSocket;

export default function Socket() {
  const socket = io('http://localhost:3000', {
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.on('connect_error', err => {
    console.log(err);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
}
