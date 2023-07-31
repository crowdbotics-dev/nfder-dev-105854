import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_suv1_list = createAsyncThunk(
  "suv1s/api_v1_suv1_list",
  async payload => {
    const response = await apiService.api_v1_suv1_list(payload)
    return response.data
  }
)
export const api_v1_suv1_create = createAsyncThunk(
  "suv1s/api_v1_suv1_create",
  async payload => {
    const response = await apiService.api_v1_suv1_create(payload)
    return response.data
  }
)
export const api_v1_suv1_retrieve = createAsyncThunk(
  "suv1s/api_v1_suv1_retrieve",
  async payload => {
    const response = await apiService.api_v1_suv1_retrieve(payload)
    return response.data
  }
)
export const api_v1_suv1_update = createAsyncThunk(
  "suv1s/api_v1_suv1_update",
  async payload => {
    const response = await apiService.api_v1_suv1_update(payload)
    return response.data
  }
)
export const api_v1_suv1_partial_update = createAsyncThunk(
  "suv1s/api_v1_suv1_partial_update",
  async payload => {
    const response = await apiService.api_v1_suv1_partial_update(payload)
    return response.data
  }
)
export const api_v1_suv1_destroy = createAsyncThunk(
  "suv1s/api_v1_suv1_destroy",
  async payload => {
    const response = await apiService.api_v1_suv1_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const suv1sSlice = createSlice({
  name: "suv1s",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_suv1_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_suv1_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_suv1_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_suv1_list,
  api_v1_suv1_create,
  api_v1_suv1_retrieve,
  api_v1_suv1_update,
  api_v1_suv1_partial_update,
  api_v1_suv1_destroy,
  slice: suv1sSlice
}
