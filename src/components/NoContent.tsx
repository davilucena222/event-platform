export function NoContent() {
  return(
    <div className="flex flex-1 flex-col mt-48 items-center gap-4">
      <p className="flex text-4xl font-bold">
        😥 Ops...
      </p>
      <p className="flex text-4xl text-justify font-bold w-[400px]">
        Sem conteúdo! Clique em alguma opção da sidebar para assistir a uma aula 🔥 
      </p>
    </div>
  );
}