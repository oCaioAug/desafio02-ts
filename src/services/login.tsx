export const login = (): void => {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);
    let nome = $('.nome')?.value;

    alert(`Seja bem vindo, ${nome}!`);
}
