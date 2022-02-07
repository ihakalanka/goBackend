package controllers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	studentstruct "test/studentStruct"

	database "test/database"
	"strconv"

	"github.com/gorilla/mux"
)

//GetAllPerson get all person data
func GetAllPerson(w http.ResponseWriter, r *http.Request) {
	var student []studentstruct.Student
	database.Connector.Find(&student)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(student)
}

//GetPersonByID returns person with specific ID
func GetPersonByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var student studentstruct.Student
	database.Connector.First(&student, key)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(student)
}

//CreatePerson creates person
func CreatePerson(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var student studentstruct.Student
	json.Unmarshal(requestBody, &student)

	database.Connector.Create(student)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(student)
}

//UpdatePersonByID updates person with respective ID
func UpdatePersonByID(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var student studentstruct.Student
	json.Unmarshal(requestBody, &student)
	database.Connector.Save(&student)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(student)
}

//DeletPersonByID delete's person with specific ID
func DeletPersonByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var student studentstruct.Student
	id, _ := strconv.ParseInt(key, 10, 64)
	database.Connector.Where("id = ?", id).Delete(&student)
	w.WriteHeader(http.StatusNoContent)
}