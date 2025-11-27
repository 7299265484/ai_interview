// lib/RealtimeTranscriber.js

export class RealtimeTranscriber {
  constructor({ token, sample_rate = 16000 }) {
    this.token = token;
    this.sampleRate = sample_rate;
    this.socket = null;
  }

  // 1. Connect to AssemblyAI via WebSocket
  async connect() {
    const url = `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=${this.sampleRate}&token=${this.token}`;
    
    this.socket = new WebSocket(url);

    // Handle incoming messages (Transcripts)
    this.socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      
      // Check if we have a partial or final transcript
      if (data.message_type === 'SessionBegins') {
        console.log('Session started:', data.session_id);
      }
      
      // If the user's code subscribed to 'transcript', call that function
      if (this.onTranscriptCallback) {
        this.onTranscriptCallback(data);
      }
    };

    this.socket.onerror = (err) => {
      console.error('WebSocket Error:', err);
    };

    this.socket.onclose = () => {
      console.log('WebSocket Closed');
    };

    // Wait specifically for the connection to open before returning
    return new Promise((resolve, reject) => {
      this.socket.onopen = () => {
        console.log('AssemblyAI WebSocket Connected');
        resolve();
      };
      // Add a timeout or error handler here for robustness if needed
    });
  }

  // 2. Allow the main component to listen for transcripts
  on(event, callback) {
    if (event === 'transcript') {
      this.onTranscriptCallback = callback;
    }
  }

  // 3. Send Audio Data to AssemblyAI
  sendAudio(buffer) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      // Convert ArrayBuffer to Base64
      const base64String = this.arrayBufferToBase64(buffer);
      
      // Send JSON as required by AssemblyAI
      this.socket.send(JSON.stringify({ 
        audio_data: base64String 
      }));
    }
  }

  // 4. Helper: Convert Audio Buffer to Base64
  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  // 5. Disconnect
  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

export default RealtimeTranscriber;