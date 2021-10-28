import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import Styles from '../Styles/FormikStyles';
const FormikScreen = () => {
    return (
        <View style={Styles.Container}>
            <Formik
                initialValues={{ email: "", name: "", surname: "",gender:"",location:"",birthdate:"",phone:"",TC:"" }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={Styles.Container2}>
                        <Text style={Styles.HeaderTitle} > Bilgileri Doldurarak Günlük İşler İçin Sizi Arayalım </Text>
                        <TextInput
                            style={Styles.TI}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            placeholder="Lütfen Geçerli Bir Mail Adresi Giriniz"
                        />
                        <TextInput
                            style={Styles.TI}
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                            placeholder="Adınız"
                        />
                        <TextInput
                            style={Styles.TI}
                            onChangeText={handleChange("surname")}
                            onBlur={handleBlur("surname")}
                            value={values.surname}
                            placeholder="Soyadınız"
                        />
                        <TouchableOpacity
                            style={Styles.buton}
                            onPress={handleSubmit}>
                            <Text style={Styles.TouchTxt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default FormikScreen
