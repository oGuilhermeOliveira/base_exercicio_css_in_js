import { FormEvent, useState } from 'react'

import { Pesquisa, BtnPesquisa, Camp } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Pesquisa onSubmit={aoEnviarForm}>
      <Camp
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisa type="submit">Pesquisar</BtnPesquisa>
    </Pesquisa>
  )
}
export default FormVagas
