import { FlatList, StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabOneScreen() {

  const series = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const mockImage = "https://pbs.twimg.com/media/GFetdZGW0AAnKQI.jpg"
  const insets = useSafeAreaInsets();

  const ItemThumbnail = ({ item }: { item: number }) => {
    return (
      <View style={{ maxHeight: 160, maxWidth: 120, marginRight: 8, borderRadius: 8, overflow: 'hidden', alignItems: 'center' }}>
        <Image style={{ height: 160, width: 120, borderRadius: 8, overflow: 'hidden' }} source={{ uri: mockImage }} />

        <Text style={{ position: 'absolute', bottom: 0, backgroundColor: "#E60710", textAlign: 'center', padding: 4, fontWeight: 'bold', borderTopLeftRadius: 4, borderTopRightRadius: 4, fontSize: 12 }}>
          Recently Added
        </Text>
      </View>
    )
  }

  return (
    <View style={[{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }]}>
      <ScrollView>
        <Text style={styles.title}>Top Picks for You</Text>
        <FlatList data={series} renderItem={ItemThumbnail} horizontal style={{ paddingHorizontal: 16, flexGrow: 0, }} />
        <Text style={styles.title}>Because you watched Seinfeld</Text>
        <FlatList data={series} renderItem={ItemThumbnail} horizontal style={{ paddingHorizontal: 16, flexGrow: 0, }} />
        <Text style={styles.title}>Because you watched Seinfeld</Text>
        <FlatList data={series} renderItem={ItemThumbnail} horizontal style={{ paddingHorizontal: 16, flexGrow: 0, }} />
        <Text style={styles.title}>Because you watched Seinfeld</Text>
        <FlatList data={series} renderItem={ItemThumbnail} horizontal style={{ paddingHorizontal: 16, flexGrow: 0, }} />
        <Text style={styles.title}>Because you watched Seinfeld</Text>
        <FlatList data={series} renderItem={ItemThumbnail} horizontal style={{ paddingHorizontal: 16, flexGrow: 0, }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
