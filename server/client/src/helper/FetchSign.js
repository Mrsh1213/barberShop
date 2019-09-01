import axios from 'axios'
class FetchSign {

    //get
    static async readApi(url) {
        //url,reqConfig
        axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                console.log(res.data);

            }).catch(err=>{
            console.log(err);
        })

    }
    static async readApiByBody(requestObject) {
        //url,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                await store.dispatch({type: SET_TOKEN, token: token});//set state
            }

            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.get(signedRequest.url, signedRequest.data)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    console.log(errors);
                    return errors;
                    showSnack("خطا در ثبت داده", "error", true, 6000);
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }

    }
    //post
    static async createApi(requestObject) {
        //url,data,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.post(signedRequest.url, signedRequest.data).then(respons => {
                return respons;
            }).catch(errors => {
                //Modal
                console.log(errors);
                return errors;
                showSnack("خطا در ثبت داده", "error", true, 6000);
            });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    //put
    static async updateApi(requestObject) {
        //url,data,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.put(signedRequest.url, signedRequest.data)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    //Modal
                    console.log(errors);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }

    //delete
    static async deleteApi(requestObject) {
        //url,reqConfig
        if (localStorage.getItem(ACCESS_TOKEN)) {
            if (store.getState().oauth2Reducer.token.sign === undefined) {
                let token = await Auth.createToken(localStorage.getItem(ACCESS_TOKEN),
                    localStorage.getItem(REFRESH_TOKEN), REFRESH_TOKEN);
                store.dispatch({type: SET_TOKEN, token: token});//set state
            }
            const signedRequest = await store.getState().oauth2Reducer.token.sign(requestObject);
            return await axios.delete(signedRequest.url)
                .then(respons => {
                    return respons;
                }).catch(errors => {
                    //Modal
                    console.log(errors);
                    return errors;
                });
        } else {
            History.push(SUB_SYSTEM_CONTEXT + "/signIn");
        }
    }
}
