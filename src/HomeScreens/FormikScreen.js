import React from 'react'
import { TextInput, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Styles from '../Styles/FormikStyles';
const FormikScreen = () => {
    return (
        <SafeAreaView style={Styles.Container}
            keyboardShouldPersistTaps='handled'>
            <ScrollView style={Styles.Container}>
                <Formik
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
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
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

                            />
                            <Text style={Styles.TItext}>Soyadınız*</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("surname")}
                                onBlur={handleBlur("surname")}
                                value={values.surname}
                                placeholder="Soyadınız"
                                autoCorrect
                            />
                            <Text style={Styles.TItext}>E-mail Adresiniz</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                placeholder="Lütfen Geçerli Bir Mail Adresi Giriniz"
                            />
                            <Text style={Styles.TItext}>Telefon Numaranız*</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}
                                value={values.phone}
                                placeholder="Telefon Numaranız"
                                keyboardType="number-pad"
                            />
                            <Text style={Styles.TItext}>Cinsiyetiniz</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("gender")}
                                onBlur={handleBlur("gender")}
                                value={values.gender}
                                placeholder="Cinsiyetiniz"
                            />
                            <Text style={Styles.TItext}>Çalışmak istediğiniz Semtler (İstediğiniz kadar yazabilirsiniz.)</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("location")}
                                onBlur={handleBlur("location")}
                                value={values.location}
                                placeholder="Çalışmak istediğin semtler"
                                multiline
                            />
                            <Text style={Styles.TItext}>Çalışabileceğiniz Günleri yazınız (ör : Salı-perşembe-cumartesi)</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("workDay")}
                                onBlur={handleBlur("workDay")}
                                value={values.workDay}
                                placeholder="Çalışmak istediğiniz Günler (pazartesi - salı)"
                                multiline
                            />
                            <Text style={Styles.TItext}>Çalışmak istediğiniz Saat aralığını yazınız *</Text>
                            <TextInput
                                style={Styles.TI}
                                onChangeText={handleChange("workTime")}
                                onBlur={handleBlur("workTime")}
                                value={values.workTime}
                                placeholder="Çalışmak istediğiniz saatler (ör: 09-16)"
                                multiline
                            />
                            <TouchableOpacity
                                style={Styles.buton}
                                onPress={handleSubmit}>
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
