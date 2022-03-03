import React, { useState } from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { Content } from 'native-base';
import { useTranslation } from 'react-i18next';
import { withTheme } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import styles from './signin.styles';
import { images } from '../../constants';
import { AppButton, Touchable, Text, InputText } from '../../components';
import { screens } from '../../config';

const SignIn = (props) => {
  const [t] = useTranslation();
  const [tab, setTab] = useState('PHONE');
  
  const goToHome = () => {
    props.navigation.navigate(screens.home);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.topContainer}>
        <ImageBackground source={images.background} resizeMode="cover" style={styles.backgroundImage}>
          <FastImage source={images.logo} style={styles.logoImage} resizeMode="contain" />
        </ImageBackground>
      </View>
      <Content contentContainerStyle={styles.mainConatiner}>
        <View style={styles.center}>
          <View style={styles.tabContainer}>
            <Touchable onPress={() => setTab('PHONE')} style={tab === 'PHONE' ? styles.activeTab : styles.tab}>
              <Text style={tab === 'PHONE' ? styles.activeTabText : styles.tabText}>{t('SignIn.phone')}</Text>
            </Touchable>
            <Touchable onPress={() => setTab('EMAIL')} style={tab === 'EMAIL' ? styles.activeTab : styles.tab}>
              <Text style={tab === 'EMAIL' ? styles.activeTabText : styles.tabText}>{t('SignIn.email')}</Text>
            </Touchable>
          </View>
        </View>
        <View style={styles.inputContainer}>
          {tab === 'EMAIL' ? (
            <InputText placeholder={'Ex. johdoe@gmail.com'} keyboardType="email-address" />
          ) : (
            <InputText keyboardType="number-pad" />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <AppButton hasNavigate onSubmit={goToHome} title={t('Common.continue')} />
        </View>
        <Text style={styles.descriptionText}>
          {t('SignIn.temrs_privacy_text')} <Text style={styles.highlight}>{t('SignIn.terms_service')}</Text>{' '}
          {t('SignIn.and')} <Text style={styles.highlight}>{t('SignIn.privacy_policy')}</Text>
        </Text>
        <View style={styles.seperator} />
        <Text style={styles.smallText}>{t('SignIn.already_account')}</Text>
        <Text style={styles.loginToText}>{t('SignIn.login_with_NEARApps')}</Text>
      </Content>
    </View>
  );
};
export default withTheme(SignIn);
