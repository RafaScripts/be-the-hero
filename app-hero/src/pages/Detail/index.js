import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Linking, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'
import { AdMobInterstitial, } from 'expo-ads-admob';
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar o caso ${incident.title}`
    function navigationBack() {
        navigation.goBack()
    }


    useEffect(() => {
        async function loadAd() {
            AdMobInterstitial.setAdUnitID('ca-app-pub-6827368962849486/3055683530');
            interstitialAd();
        }

        loadAd();

    }, []);

    
    
    async function interstitialAd() {
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
    }


    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }

    return(
         <View style={styles.conteiner}>
             <View style={styles.header}>
               <Image source={logoImg}/>
                
              <TouchableOpacity onPress={navigationBack}>
                 <Feather name='arrow-left' size={28} color='#E82041' />
              </TouchableOpacity>
              </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.incidents}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de ({incident.city}/{incident.uf})</Text>
                
                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                
                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
                
                </View>
                
                <View style={styles.contactBox}>
                    <Text style={styles.titleHero}>Salve o Dia!</Text>
                    <Text style={styles.titleHero}>Seja o herói deste caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato:</Text>
                    
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionsText}>Whatsapp</Text>
                        </TouchableOpacity>
                      <TouchableOpacity style={styles.action} onPress={sendMail}>
                          <Text style={styles.actionsText}>E-mail</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
        </ScrollView>
         </View>
    );
}