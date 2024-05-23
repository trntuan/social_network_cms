import { useSelector } from 'react-redux'

import { selectUsers, selectTeams } from 'src/providers/redux/selectors';

const useStoreSelector = () => {
    const userState = useSelector(selectUsers)
    const teamsState = useSelector(selectTeams)

    return {
        userState,
        teamsState
    }
}


export default useStoreSelector