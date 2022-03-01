package kr.co.dao;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.ManageVO;

@Repository
public class ManageDAOImpl implements ManageDAO {
	
	@Inject
	private SqlSession sqlSession;
	
	// 검색
	@Override
	public List<ManageVO> search(ManageVO manageVO) throws Exception {
		return sqlSession.selectList("ManageMapper.search", manageVO);
	}
	
	// 이수내역 불러오기
	@Override
	public List<ManageVO> getTakes(String studentId) throws Exception {
		return sqlSession.selectList("ManageMapper.getTakes", studentId);
	}
	
	// 이수내역 삽입
	@Override
	public void insertTakes(Map<String, Object> insertMap) throws Exception {
		sqlSession.insert("ManageMapper.insertTakes", insertMap);
	}
	
	// 이수내역 삭제
	@Override
	public void deleteTakes(Map<String, Object> removeMap) throws Exception {
		sqlSession.delete("ManageMapper.deleteTakes", removeMap);
	}
}
