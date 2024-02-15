import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useWindowDimensions, Text, View } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import {  } from '@/src/components/Themed';
import Breathe from '../components/Breathe';
import { MonoText } from '../components/StyledText';

export default function ModalScreen() {
  const { width, height } = useWindowDimensions();

  return (<>
    <View style={[styles.backgroundAnimationContainer, { width, height }]}>
      <Breathe />
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Keep Calm, and Use Skia</Text>
      
      <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}>
          Open up the code for this screen:
        </Text>

        <View
          style={styles.codeHighlightContainer}>
          <MonoText>src/app/modal.tsx</MonoText>
        </View>

        <Text
          style={styles.getStartedText}>
          Background animation loaded from:
        </Text>

        <View
          style={styles.codeHighlightContainer}>
          <MonoText>src/components/Breathe.tsx</MonoText>
        </View>
      </View>
    </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  backgroundAnimationContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#454545',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: 'transparent',
  },
  codeHighlightContainer: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 10,
    backgroundColor: '#7d7d7d5c'
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: '#454545',
  },
});
