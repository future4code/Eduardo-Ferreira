import axios from "axios";

const base = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";

export const GetProfileToChoose = async () => {
    try {
        return await axios.get(base + `${':aluno/person/'}`);
    }catch(err) {
        console.log(err.response);
    }
}

export const ChoosePerson = async (body) => {
    try {
        return await axios.post(base + `${':aluno/choose-person'}`, body);
    }catch(err) {
        console.log(err.response);
    }
}

