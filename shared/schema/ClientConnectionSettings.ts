import type {infer as zodInfer} from 'zod';
import {literal, number, strictObject, string, union} from 'zod';

const delugeConnectionSettingsSchema = strictObject({
  client: literal('Deluge'),
  type: literal('rpc'),
  version: literal(1),
  host: string(),
  port: number(),
  username: string(),
  password: string(),
});

export type DelugeConnectionSettings = zodInfer<typeof delugeConnectionSettingsSchema>;

const qBittorrentConnectionSettingsSchema = strictObject({
  client: literal('qBittorrent'),
  type: literal('web'),
  version: literal(1),
  url: string().url(),
  username: string(),
  password: string(),
});

export type QBittorrentConnectionSettings = zodInfer<typeof qBittorrentConnectionSettingsSchema>;

const transmissionConnectionSettingsSchema = strictObject({
  client: literal('Transmission'),
  type: literal('rpc'),
  version: literal(1),
  url: string().url(),
  username: string(),
  password: string(),
});

export type TransmissionConnectionSettings = zodInfer<typeof transmissionConnectionSettingsSchema>;

const neptuneConnectionSettingsSchema = strictObject({
  client: literal('Neptune'),
  type: literal('rpc'),
  version: literal(1),
  url: string().url(),
  token: string(),
});

export type NeptuneConnectionSettings = zodInfer<typeof neptuneConnectionSettingsSchema>;

export const clientConnectionSettingsSchema = union([
  delugeConnectionSettingsSchema,
  neptuneConnectionSettingsSchema,
  qBittorrentConnectionSettingsSchema,
  transmissionConnectionSettingsSchema,
]);

export type ClientConnectionSettings = zodInfer<typeof clientConnectionSettingsSchema>;
