import axios from "axios"
const nfderdevAPI = axios.create({
  baseURL: "https://nfder-dev-105854.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return nfderdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return nfderdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return nfderdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_suv1_list(payload) {
  return nfderdevAPI.get(`/api/v1/suv1/`)
}
function api_v1_suv1_create(payload) {
  return nfderdevAPI.post(`/api/v1/suv1/`, payload)
}
function api_v1_suv1_retrieve(payload) {
  return nfderdevAPI.get(`/api/v1/suv1/${payload.id}/`)
}
function api_v1_suv1_update(payload) {
  return nfderdevAPI.put(`/api/v1/suv1/${payload.id}/`, payload)
}
function api_v1_suv1_partial_update(payload) {
  return nfderdevAPI.patch(`/api/v1/suv1/${payload.id}/`, payload)
}
function api_v1_suv1_destroy(payload) {
  return nfderdevAPI.delete(`/api/v1/suv1/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return nfderdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return nfderdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return nfderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return nfderdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return nfderdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return nfderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return nfderdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return nfderdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return nfderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return nfderdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return nfderdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_suv1_list,
  api_v1_suv1_create,
  api_v1_suv1_retrieve,
  api_v1_suv1_update,
  api_v1_suv1_partial_update,
  api_v1_suv1_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
