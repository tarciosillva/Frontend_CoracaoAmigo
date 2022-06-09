export interface family{
    id: number,
    id_usuario_criacao: number,
    membros: number,
    renda_familiar: number,
    programas_governo: string,
    estado_atual: string,
    created_at: string
}

export interface responsible {
    id: number,
    nome: string,
    idade: number,
    estado_civil: string,
    profissao: string,
    ocupacao: string,
    escolaridade: string,
    telefone: string,
    numero_roupa: number,
    numero_calcado: number,
    id_familia: number
}

export interface dependent{
    id: number,
    nome: string,
    idade: number,
    parentesco: string,
    escolaridade: string,
    numero_roupa: number,
    numero_calcado: number,
    createdAt: string,
    updatedAt: string,
    id_familia: number
}

export interface adress{
    id: number,
    municipio: string,
    bairro: string,
    rua: string,
    numero: number,
    geolocalizacao: string,
    id_familia: number
}

export interface familyHome{
    id: 1,
    tipo_moradia: string,
    condicao_moradia: string,
    estrutura_moradia: string,
    qualidade_agua: string,
    qualidade_eletrica: string,
    foto:string
    id_familia: number
}

export interface registerProps{
    family:family,
    responsible:responsible,
    dependet:dependent[],
    adress:adress,
    familyHome:familyHome
}

export interface voluntaryProps{
    id:string,
    nome: string,
    email: string,
    senha: string,
    cpf: string,
    telefone: string,
	perfil?: string
}
