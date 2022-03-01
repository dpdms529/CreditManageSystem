package kr.co.dao;

import java.util.List;
import java.util.Map;

import kr.co.vo.ManageVO;

public interface ManageDAO {
	
	// �˻�
	public List<ManageVO> search(ManageVO manageVO) throws Exception;
	
	// �������� �ҷ�����
	public List<ManageVO> getTakes(String studentId) throws Exception;
	
	// �߰� �������� insert
	public void insertTakes(Map<String, Object> insertMap) throws Exception;
	
	// ������ �������� delete
	public void deleteTakes(Map<String, Object> removeMap) throws Exception;

}
