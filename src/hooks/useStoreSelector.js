import { useSelector } from 'react-redux'

import { selectUsers, selectTeams, selectPosts } from 'src/providers/redux/selectors';

const useStoreSelector = () => {
    const userState = useSelector(selectUsers)
    const teamsState = useSelector(selectTeams)
    const postState = useSelector(selectPosts)

    return {
        userState,
        teamsState,
        postState
    }
}


export default useStoreSelector