import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Content } from 'native-base';
import { useTranslation } from 'react-i18next';
import styles from './send-nft.styles';
import { AppButton, Text, ModalContainer, InputText } from '../../components';
import { screens } from '../../config';
import { NFTCard } from '../components';
import { NFTs } from '../home/home';
import { ContactList } from '../components/ContactList';

const SendNFT = (props) => {
  const [t] = useTranslation();

  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [assets, setAssets] = useState([]);
  const [step, setStep] = useState(0);

  const goToHome = () => {
    props.navigation.navigate(screens.home);
  };

  const handleSelectCard = (selected, item) => {
    let assetsArr = [...assets];
    if (selected) {
      assetsArr.push(item.id);
    } else {
      let index = assetsArr.indexOf(item.id);
      assetsArr.splice(index, 1);
    }
    setAssets(assetsArr);
  }

  const handleSubmit = () => {
    if (step == 0) {
      setStep(1);
    }
  }

  return (
    <ModalContainer title={t('SendNFT.title')} onPressBack={props.navigation.goBack} style={{ ...styles.modalContainer, height: step === 0 ? 466 : undefined, flex: step === 0 ? undefined : 1 }} >
      {
        step === 0 && (
          <Content contentContainerStyle={{ ...styles.mainConatiner }}>
            <Text style={styles.descriptionText}>{t('SendNFT.description')}</Text>
            <ScrollView horizontal style={styles.horizontalScrollView}>
              {
                NFTs.map((item, index) => {
                  return (
                    <NFTCard key={`nft_card_${index}`} style={styles.nftCard} data={item} onSelected={handleSelectCard} />
                  )
                })
              }
            </ScrollView>
          </Content>
        )
      }
      {
        step === 1 && (
          <ContactList />
        )
      }
      <View style={styles.buttonContainer}>
        <AppButton title={step === 0 ? "Next" : "Send"} hasNavigate disabled={assets.length === 0} onSubmit={handleSubmit} />
      </View>
    </ModalContainer>
  );
};
export default SendNFT;
