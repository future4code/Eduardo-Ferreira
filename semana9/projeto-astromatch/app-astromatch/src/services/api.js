import axios from "axios";

const base = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";

export const GetProfileToChoose = async () => {
    try {
        return await axios.get(base + `${'eduardo-silva/person/'}`);
    }catch(err) {
        console.log(err.response);
    }
}

export const ChoosePerson = async (body) => {
    try {
        return await axios.post(base + `${'eduardo-silva/choose-person'}`, body);
    }catch(err) {
        console.log(err.response);
    }
}

export const GetMatches = async () => {
    try {
        return await axios.get(base + `${'eduardo-silva/matches/'}`);
    }catch(err) {
        console.log(err.response);
    }
}


export const ClearApi = async () => {
    try {
        return await axios.put(base + `${'eduardo-silva/clear/'}`);
    }catch(err) {
        console.log(err.response);
    }
}

