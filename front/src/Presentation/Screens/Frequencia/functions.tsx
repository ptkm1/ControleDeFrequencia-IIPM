import { API } from 'Infrastructure/APIS';
import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function useFrequencia() {


    const [frequencia, setFrequencia]: any = useState();
    const [NovaFrequencia, setNovaFrequencia]: any = useState()

    const columns: any = [
        { title: "Nome", field: "nome", },
        { title: "Cargo", field: "cargo" },
        { title: "Matricula", field: "matricula" },
        { title: "Telefone", field: "telefone" },
        { title: "janeiro", field: "janeiro" },
        { title: "fevereiro", field: "fevereiro" },
        { title: "março", field: "marco" },
        { title: "abril", field: 'abril', },
        { title: "maio", field: "maio", },
        { title: "junho", field: "junho", },
        { title: "julho", field: "julho", },
        { title: "agosto", field: "agosto", },
        { title: "setembro", field: "setembro", },
        { title: "outubro", field: "outubro", },
        { title: "novembro", field: "novembro", },
        { title: "dezembro", field: "dezembro", },
    ]

    useEffect(() => {
        (async () => {
            const { data } = await API.get("/servidor/frequencia");
            const frequency = data.map((a: any, key: any) => {
                const frequencia = a.frequencia[0]
                frequencia['idFrequencia'] = frequencia?.id
                delete frequencia?.id && delete frequencia.frequencia
                const frequenciaConcatenada = Object.assign(a, frequencia)
                return frequenciaConcatenada
            })
            setFrequencia(frequency);
        })();
    }, [NovaFrequencia])

    const handleAddUser = async (payload: any) => {
        try {
            if (payload.janeiro) {
                alert("Não adicione informações de presença ao criar usuário!")
                throw Error()
            }
            const { data } = await API.post('/servidor', payload)
            setNovaFrequencia(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteUser = async (payload: any) => {
        try {
            const { data } = await API.delete(`/servidor/${payload.id}`)
            setNovaFrequencia(data)
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdateUser = async (payload: any) => {

        const servidor = {
            nome: payload.nome,
            telefone: payload.telefone,
            matricula: payload.matricula,
            rg: payload.rg,
            endereco: payload.endereco,
            cargo: payload.cargo,
            data_de_nascimento: payload.data_de_nascimento,
            tipoDoServidor: payload.tipoDoServidor,
        }

        const frequencia = {
            janeiro: payload.janeiro,
            fevereiro: payload.fevereiro,
            marco: payload.marco,
            abril: payload.abril,
            maio: payload.maio,
            junho: payload.junho,
            julho: payload.julho,
            setembro: payload.setembro,
            outubro: payload.outubro,
            novembro: payload.novembro,
            dezembro: payload.dezembro
        }
        try {
            const { data } = await API.patch(`/servidor/${payload.id}`, servidor)
            const { data: updateFrequencia } = await API.patch(`/frequencia/${payload.idFrequencia}`, frequencia)
            console.log(updateFrequencia)
            setNovaFrequencia(data)
        } catch (error) {
            console.error(error)
        }
    }


    return {
        frequencia,
        setFrequencia,
        NovaFrequencia,
        setNovaFrequencia,
        handleAddUser,
        handleDeleteUser,
        handleUpdateUser,
        columns
    }
}

export default useFrequencia;