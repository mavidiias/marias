import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const oracoes = sqliteTable('oracoes', {
	id: integer().primaryKey({ autoIncrement: true }),
	conteudo: text().notNull(),
  });