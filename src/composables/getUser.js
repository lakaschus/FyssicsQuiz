import { ref } from "vue"

// firebase imports
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"

// refs
const user = ref(auth.currentUser)

// auth changes
onAuthStateChanged(auth, (_user) => {
    console.log("🚀 ~ file: getUser.js ~ line 12 ~ onAuthStateChanged ~ _user", _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser