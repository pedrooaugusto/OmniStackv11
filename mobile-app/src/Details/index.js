import React from 'react'
// import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native'
// import * as MailComposer from 'expo-mail-composer'

import logo from '../assets/logo.png'

import styles from './style'

export default function Details() {
    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident

    function navigateBack() {
        navigation.navigate('Incidents')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />

                <TouchableOpacity>
                    <Text onPress={navigateBack}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    R$ {(incident.value.toFixed(2))}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroTitle}>Entre em contato:</Text>

                <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action}>
                    <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
