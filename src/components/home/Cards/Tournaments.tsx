import {View, Text, FlatList, StyleSheet, SectionList} from 'react-native';
import React, { PropsWithChildren } from 'react';
import LiveTournaments from './LiveTournaments';
import OldMatches from './Match';
import {ScrollView} from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { VirtualizedList } from '../../VirtualizedList';


export type LiveTournamentsProps = PropsWithChildren<{
  data: Object;
}>;

type extendedTournamentList = PropsWithChildren<{
  title: string;
  overflowY: boolean;
}>;

type SectionListProps = LiveTournamentsProps & extendedTournamentList;


const Tournaments = () => {
  const data = {
    liveTournaments: [
      {
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },
      {
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },
    ],
    matches: [
      {
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },
      {
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },{
        team1: {
          img: "https://p7.hiclipart.com/preview/401/30/486/mumbai-indians-2018-indian-premier-league-kolkata-knight-riders-delhi-daredevils-royal-challengers-bangalore-cricket.jpg",
          name: "Mumbai Indians",
          shortName:"MI",
          score: "185/10"
        },
        team2: {
          img: "https://toppng.com/uploads/preview/chennai-super-kings-vector-logo-11574257227w5kryajptc.png",
          name: "Chennai Super Kings",
          shortName:"CSK",
          score: "181/10"
        },
        results:{
          resString: `MI won by 10 Runs`,
          "result": 1
        },
        _id: "hdf",

      },
    ],
  };

  return (
    <VirtualizedList>
      <SectionWiseList title="Live Matches" data={data.liveTournaments} overflowY={false} />
      <SectionWiseList title="Old Matches" data={data.matches} overflowY={true} />

    </VirtualizedList>
  );
};
// <ScrollView>
// </ScrollView>

const SectionWiseList = ({title, data, overflowY}:SectionListProps) => {
  const [isScrollable, setIsScrollable] = React.useState(false);

  return (
    <View
      onStartShouldSetResponderCapture={() => {
        setIsScrollable(true);
        return false;
      }}
    >
      <Text style={styles.title}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) =>
            title === 'Live Matches' ? (
              <LiveTournaments data={item} />
            ) : (
              <OldMatches data={item} />
            )
          }
          keyExtractor={item => item.id}
          horizontal={!overflowY}
          scrollEnabled={isScrollable}
          onMomentumScrollEnd={() => setIsScrollable(false)}
        />
    </View>
  );
};
export default Tournaments;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 35,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontStyle:"italic",
  },
});