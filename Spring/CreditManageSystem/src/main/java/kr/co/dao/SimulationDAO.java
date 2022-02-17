package kr.co.dao;

import java.util.List;

import kr.co.vo.CreditVO;
import kr.co.vo.CriteriaVO;

public interface SimulationDAO {
	//��������
	public List<CriteriaVO> criteria(int admissionYear) throws Exception;
	
	//�������
	public List<CreditVO> credit(String studentId) throws Exception;
}
