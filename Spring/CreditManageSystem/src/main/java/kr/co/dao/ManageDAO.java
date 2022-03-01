package kr.co.dao;

import java.util.List;
import java.util.Map;

import kr.co.vo.ManageVO;

public interface ManageDAO {
	
	// 검색
	public List<ManageVO> search(ManageVO manageVO) throws Exception;
	
	// 수강내역 불러오기
	public List<ManageVO> getTakes(String studentId) throws Exception;
	
	// 추가 수강내역 insert
	public void insertTakes(Map<String, Object> insertMap) throws Exception;
	
	// 삭제된 수강내역 delete
	public void deleteTakes(Map<String, Object> removeMap) throws Exception;

}
