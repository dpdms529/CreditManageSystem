package kr.co.dao;

import java.util.List;

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
	public List<ManageVO> getTakes() throws Exception {
		return sqlSession.selectList("ManageMapper.getTakes");
	}
	
	// 이수내역 삽입
	@Override
	public void insertTakes(List<ManageVO> manageVO) throws Exception {
		sqlSession.insert("ManageMapper.insertTakes", manageVO);
	}
	
	// 이수내역 삭제
	@Override
	public void deleteTakes(List<ManageVO> manageVO) throws Exception {
		sqlSession.delete("ManageMapper.deleteTakes", manageVO);
	}
}
