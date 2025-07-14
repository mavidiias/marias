import { db } from '$lib/server/db';
import { oracoes } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const todasoracoes = await db.select().from(oracoes);
    return { todasoracoes };
};

export const actions = {
    salvaroracao: async ({ request }) => {
        const data = await request.formData();
        const oracao = await data.get('oracao');

        if (!oracao) return fail(400, { erro: 'Digite alguma coisa!' })

        const [oracaosalva] = await db.insert(oracoes).values({ conteudo: oracao, status: false }).returning();

        return { oracaosalva, status: 201 };
    },
    editaroracao: async ({ request }) => {
        const data = await request.formData();
        const id = await data.get('id');
        const conteudo = await data.get('conteudo');

        if (!conteudo) return fail(400, { erro: 'Digite alguma coisa!' })

        await db.update(oracoes).set({ conteudo }).where(eq(oracoes.id, id));

        return { status: 201 };
    },

    apagaroracao: async ({ request }) => {
        const data = await request.formData();
        const id = await data.get('id');

        await db.delete(oracoes).where(eq(oracoes.id, id));

        return { status: 201 };
    }
}
