import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Styles from '../Styles/FormikStyles';
import { CheckBox } from 'react-native-elements'
import firestore from "@react-native-firebase/firestore"
import *as yup from "yup"
import { date } from 'yup/lib/locale';

const FormikScreen = () => {
    const [name1, setName] = useState("")
    const [surname1, setSurname] = useState("")
    const [email1, setEmail] = useState("")
    const [phone1, setPhone] = useState("")
    const [gender1, setGender] = useState("")
    const [birthdate1, setBirthDate] = useState("")
    const [location1, setLocation] = useState("")
    const [workDay1, setWorkDay] = useState("")
    const [workTime1, setWorkTime] = useState("")
    const [age1, setAge] = useState("")
    const [TC1, setTC] = useState("")

    let year = new Date().getFullYear()

    const collFirestore = firestore().collection("Customer")
    let getCustomer = function () {

        if (name1 !== "" && surname1 !== "" && phone1 !== "" && gender1 !== "" && birthdate1 !== "") {

            collFirestore.doc(phone1).set({
                Name: name1,
                Surname: surname1,
                Email: email1,
                Phone: phone1,
                Gender: gender1,
                BirthDate: birthdate1,
                Location: location1,
                WorkDay: workDay1,
                WorkTime: workTime1,
                TC: TC1,
                Age : age1
            })
            alert("Başvurunuz alındı en kısa zamanda iletişime geçilecektir.")
        } else {
            alert("Lütfen bilgilerinizi doldurunuz.")
        }

    }

    const validationSchema =
        yup.object().shape({
            name: yup.string().required("Lütfen isminizi giriniz."),
            surname: yup.string().required("Lütfen soyadınızı giriniz."),
            email: yup.string().email("Email adresini doğru giriniz."),
            phone: yup.string().min(10, "Kontrol ediniz.").max(11, "Kontrol ediniz."),
            gender: yup.string().min(1).max(1).required("Lütfen cinsiyetinizi belirtiniz."),
            birthdate: yup.string().min(4, "dört haneli olarak doğum yılınızı giriniz.").max(4, "dört haneli olarak doğum yılınızı giriniz."),
            location: yup.string(),
            workDay: yup.string(),
            workTime: yup.string(),
            TC: yup.string()
        })



    return (
        <SafeAreaView style={Styles.Container}
            keyboardShouldPersistTaps='handled'>
            <ScrollView style={Styles.Container}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        name: "",
                        surname: "",
                        email: "",
                        phone: "",
                        gender: "",
                        birthdate: "",
                        location: "",
                        workDay: "",
                        workTime: "",
                        TC: "",

                    }}
                    onSubmit={values => {
                        setName(values.name),
                            setSurname(values.surname),
                            setEmail(values.email),
                            setPhone(values.phone),
                            setGender(values.gender),
                            setBirthDate(values.birthdate),
                            setLocation(values.location),
                            setWorkDay(values.workDay),
                            setWorkTime(values.workTime),
                            setTC(values.TC)
                        setAge(year - values.birthdate)
                    }}

                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={Styles.Container2}>
                            <Text style={Styles.HeaderTitle} >
                                Günlük işler için doldurun ve sizi arayalım
                            </Text>
                            <View style={Styles.line} ></View>
                            <Text style={Styles.TItext}>Adınız*</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("name")}
                                onBlur={handleBlur("name")}
                                value={values.name}
                                placeholder="Adınız"
                                keyboardType="default"

                            />
                            {errors.name && (<Text style={Styles.formikTxt}>{errors.name}</Text>)}
                            <Text style={Styles.TItext}>Soyadınız*</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("surname")}
                                onBlur={handleBlur("surname")}
                                value={values.surname}
                                placeholder="Soyadınız"
                                autoCorrect


                            />
                            {errors.surname && (<Text style={Styles.formikTxt}> {errors.surname} </Text>)}

                            {/* emeil adresiniz */}
                            <Text style={Styles.TItext}>E-mail Adresiniz</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                placeholder="Lütfen Geçerli Bir Mail Adresi Giriniz"
                            />
                            {errors.email && (<Text style={Styles.formikTxt}> {errors.email} </Text>)}
                            {/* telefon numaranız */}
                            <Text style={Styles.TItext}>Telefon Numaranız*</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}
                                value={values.phone}
                                placeholder="Telefon Numaranız"
                                keyboardType="number-pad"
                            />
                            {errors.phone && (<Text style={Styles.formikTxt}> {errors.phone} </Text>)}
                            {/* cinsiyetiniz */}
                            <Text style={Styles.TItext}>Cinsiyetiniz</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("gender")}
                                onBlur={handleBlur("gender")}
                                value={values.gender}
                                placeholder="Cinsiyetiniz ör : e"
                            />
                            {errors.gender && (<Text style={Styles.formikTxt}> {errors.gender} </Text>)}
                            {/* doğum yılınız */}
                            <Text style={Styles.TItext}>Doğum yılı</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("birthdate")}
                                onBlur={handleBlur("birthdate")}
                                value={values.birthdate}
                                placeholder="ör : 1996"
                                multiline
                            />
                            {errors.birthdate && (<Text style={Styles.formikTxt}> {errors.birthdate} </Text>)}

                            <Text style={Styles.TItext}>Çalışmak istediğiniz Semtler (İstediğiniz kadar yazabilirsiniz.)</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("location")}
                                onBlur={handleBlur("location")}
                                value={values.location}
                                placeholder="Çalışmak istediğin semtler"
                                multiline
                            />
                            {errors.location && (<Text style={Styles.formikTxt}> {errors.location} </Text>)}



                            <Text style={Styles.TItext}>Çalışabileceğiniz Günleri yazınız (ör : Salı-perşembe-cumartesi)</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("workDay")}
                                onBlur={handleBlur("workDay")}
                                value={values.workDay}
                                placeholder="Çalışmak istediğiniz Günler (pazartesi - salı)"
                                multiline
                            />
                            {errors.workDay && (<Text style={Styles.formikTxt}> {errors.workDay} </Text>)}

                            <Text style={Styles.TItext}>Çalışmak istediğiniz Saat aralığını yazınız *</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("workTime")}
                                onBlur={handleBlur("workTime")}
                                value={values.workTime}
                                placeholder="Çalışmak istediğiniz saatler (ör: 09-16)"
                                multiline
                            />
                            {errors.workTime && (<Text style={Styles.formikTxt}> {errors.workTime} </Text>)}

                            <TouchableOpacity
                                style={Styles.buton}
                                onPress={handleSubmit}
                                onPressOut={() => getCustomer()}
                            >
                                <Text style={Styles.TouchTxt}>Gönder</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FormikScreen
