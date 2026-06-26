// Strings are Buffers from bencode data structure point of view.
// Timestamp is in second.

export interface TorrentFile {
  announce: Buffer; // main tracker
  'announce-list'?: Array<Array<Buffer>>; // multi tracker torrent
  comment?: Buffer;
  'created by': Buffer;
  'creation date': number; // timestamp
  encoding?: Buffer;
  info: {
    length?: number; // single file torrent
    files?: Array<{
      length: number;
      path: Array<Buffer>;
    }>; // multi file torrent
    name: Buffer;
    'piece length': number;
    pieces: Buffer; // hash tree, NOT string
    private?: 0 | 1;
    source?: Buffer;
  };
}

export enum LibTorrentFilePriority {
  OFF = 0,
  NORMAL = 1,
  HIGH = 2,
}

export interface LibTorrentResume {
  bitfield: number;
  files: Array<{
    completed: number; // number of completed pieces
    mtime: number; // timestamp
    priority: LibTorrentFilePriority;
  }>;
  peers?: Array<{
    failed: 0 | 1;
    inet: Buffer; // encoded IP address, NOT string
    last: number; // timestamp
  }>;
  trackers?: {
    [url: string]: {
      enabled: 0 | 1;
    };
  };
  'uncertain_pieces.timestamp'?: number; // timestamp
}
