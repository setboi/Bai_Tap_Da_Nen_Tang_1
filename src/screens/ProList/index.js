import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const ProList = (props) =>{
    // dữ liệu danh sách cần được truyền vào để dùng ở nhiều nơi
    //=> cần 1 props là data để nhận dữ liệu
//const productList = props.data;

    const proList = [
        {
            id: 1,
            name: 'Tên: Nguyễn Xuân Khoa',
            des: 'Mô tả: Hơi Còi',
            link: 'Link: abc'
        },
        {
            id: 2,
            name: 'Tên: Nguyễn Đình Quang',
            des: 'Mô tả: Hơi Nghiện',
            link: 'Link: xyz'
        },
        {
            id: 3,
            name: 'Tên: Vương Xuân Huy',
            des: 'Mô tả: Đẳng Cấp'
        }
    ];

    return(
        <SafeAreaView style={styles.safeView}>
            <FlatList 
            data={proList}

            //renderItem cho 1 obj chứa {item} trả về view
            renderItem={({item}) => (
                <View>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.des}
                    </Text>
                </View>
            )}

            //Key cho item và trả về 1 giá trị là duy nhất
            keyExtractor={(item) => item.id} //id là thuộc tính
            />
        </SafeAreaView>
    )
};
export default ProList;

const styles = StyleSheet.create({
    safeView:{
        flex: 1,
        margin: 10
    }
});