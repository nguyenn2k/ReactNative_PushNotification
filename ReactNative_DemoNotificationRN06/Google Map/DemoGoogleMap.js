import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
/**
 * Map: Dùng để load bản đồ;
 * Route: Tìm đường đi ngắn nhất;
 * GeoCoding: Chuyển địa chỉ thành tọa độ;
 * @nguyentruongkhoinguyen
 */
// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polyline } from 'react-native-maps';
//import polyline from '@mapbox/polyline';

export default function DemoGoogleMap() {
  // const coordinates = [
  //   { latitude: 10.77309, longitude: 106.69835 },
  //   { latitude: 10.77281, longitude: 106.69853 },
  //   { latitude: 10.7731, longitude: 106.69882 },
  //   { latitude: 10.77371, longitude: 106.69944 },
  //   { latitude: 10.7734, longitude: 106.69978 },
  //   { latitude: 10.7736, longitude: 106.7 },
  //   { latitude: 10.77082, longitude: 106.70122 },
  //   { latitude: 10.77056, longitude: 106.70618 },
  //   { latitude: 10.76835, longitude: 106.7056 },
  //   { latitude: 10.76246, longitude: 106.70838 },
  //   { latitude: 10.75702, longitude: 106.71797 },
  //   { latitude: 10.75184, longitude: 106.72482 },
  //   { latitude: 10.75248, longitude: 106.72661 },
  //   { latitude: 10.75263, longitude: 106.728 },
  //   { latitude: 10.75238, longitude: 106.7284 },
  //   { latitude: 10.74475, longitude: 106.72915 },
  // ];
  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps

       style={styles.map}
       region={{
        latitude: 10.77309,
        longitude: 106.69835,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
       }}
     >
      {/* Marker */}
      <Marker 
        draggable
        coordinate={{ latitude: 10.77309,longitude: 106.69835 }} 
      >
        {/* Khi click vao Marker sẽ ra 'Nguyen Here' */}
        <Callout>
              <Text>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: 250,
                      height: 250,
                    }}
                    source={require('../assets/edogawa.png')}
                  />
              </Text>
              <Text>Nguyen Here</Text>
        </Callout>
      </Marker>
      {/* 
        Vẽ những đường thẳng chỉ dẫn trên bản đồ 
        strokeColor: set color                 
      */}
      {/* <Polyline coordinates={coordinates} strokeColor= {'red'}/> */}
     </MapView>
   </View>
  )
  //34p15
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});