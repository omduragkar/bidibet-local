import {View, Text, Image} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {LiveTournamentsProps} from './Tournaments';

const LiveTournaments = ({data}: LiveTournamentsProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: 350,
        height: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <ImageTeamName
          img={data?.team1?.img}
          teamName={data?.team1?.shortName}
        />
        <View style={{
            justifyContent:"center",
            alignItems:"center",
            gap:10
        }}>
            <View
            style={{
                flexDirection: 'row',
                justifyContent:"center",
                alignItems:"center"
            }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal:5
            }}>{data?.team1?.score}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal:5
            }}> - </Text>
            <Text style={{
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal:5
            }}>{data?.team2?.score}</Text>
            </View>
            <View>
                <Text style={{
                    fontSize:16,
                    color:"gray"
                }}>{data?.results?.resString}</Text>
            </View>
        </View>
        <ImageTeamName
          img={data?.team2?.img}
          teamName={data?.team2?.shortName}
        />
      </View>
      {/* {data?.team1?.shortName} */}
    </View>
  );
};

const ImageTeamName = ({teamName, img}) => {
  return (
    <View
      style={{
        height: '100%',
        gap: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: img}} // use the image URL from your data
        style={{width: 75, height: 75, borderRadius: 20}}
      />
      <Text>{teamName}</Text>
    </View>
  );
};

export default LiveTournaments;
