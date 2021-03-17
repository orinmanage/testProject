import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModifier from 'react-native-image-modifier';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      gpsLong: null,
      gpsLat: null,
    };
  }

  takePicFromGalery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeExif: true,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({
        gpsLong: image.exif.GPSLongitude,
        gpsLat: image.exif.GPSLatitude,
        image: image.path,
      });
    });
  }
  takePicFromCam() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeExif: true,

      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({gps: image.exif, image: image.path});
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <Button
              onPress={() => this.takePicFromGalery()}
              title={'take a picture from galery'}
            />
            <Button
              onPress={() => this.takePicFromCam()}
              title={'take a picture from camera'}
            />
            {this.state.image ? (
              <Image
                style={{width: 500, height: 500}}
                source={{uri: this.state.image}}
              />
            ) : null}
            <Text>{`langitude - ${this.state.gpsLat}  latitude - ${this.state.gpsLong}`}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
