package kr.co.dao;

import java.util.List;

import kr.co.vo.ManageVO;

public interface ManageDAO {
	
	// �˻�
	public List<ManageVO> search(ManageVO manageVO) throws Exception;
	
	// �������� �ҷ�����
	public List<ManageVO> getTakes() throws Exception;
	
	// �߰� �������� insert
	public void insertTakes(List<ManageVO> manageVO) throws Exception;
	
	// ������ �������� delete
	public void deleteTakes(List<ManageVO> manageVO) throws Exception;

}
