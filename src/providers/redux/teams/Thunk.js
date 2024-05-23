// * LIB
import { createAsyncThunk } from '@reduxjs/toolkit'

// * IMPORT
import TeamService from 'src/services/TeamService'

export const getTeamsList = createAsyncThunk("teams/get/all", async (_, { rejectWithValue }) => {
    try {
        const response = await TeamService.getAllTeams()
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getTeamDetail = createAsyncThunk("teams/get/detail", async(teamId, { rejectWithValue }) => {
    try {
        const response = await TeamService.getDetailTeam({
            id: teamId
        })
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})
