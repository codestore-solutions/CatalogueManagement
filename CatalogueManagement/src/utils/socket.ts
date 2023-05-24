import {io} from 'socket.io-client';

class webSocket {

    socket:any

  public async initializeSocket(socketurl: string) {

    try {
      this.socket = io('http://localhost:8081/', {
        transports: ['websocket'],
      });

      this.socket.on('connect', () => {
        console.log('Connected');
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected');
      });

      this.socket.on('error', () => {
        console.log('Error while initialization');
      });


    } catch (error) {
      console.log('Error in Socket initialization');

      console.log(error);
    }
  }

  emit(event:any,data={}){
    this.socket.emit(event,data);
  }

  on(event:any,data={}){
    this.socket.on(event,data);
  }

  removeListner(listner:any){
    this.socket.emit(listner);
  }
}

let WebSocket = new webSocket();
export default WebSocket;